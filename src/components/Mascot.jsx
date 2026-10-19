import { useEffect, useRef, useState } from "react";

const DIRECTIONS = [
  "up-left",
  "up",
  "up-right",
  "left",
  "center",
  "right",
  "down-left",
  "down",
  "down-right",
];

const REACTIONS = [
  "blink",
  "heart",
  "sparkle",
  "surprised",
  "wink",
  "bashful",
  "sleepy",
  "dizzy",
  "delighted",
];

const CLOCKWISE = [
  "right",
  "down-right",
  "down",
  "down-left",
  "left",
  "up-left",
  "up",
  "up-right",
];

const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;

// How close the cursor needs to be before the mascot starts reacting
const INTERACTION_RADIUS = 200;

// When the cursor is extremely close, mascot looks straight
const DEAD_ZONE = 50;

const PAYOFFS = ["heart", "sparkle", "delighted"];

const BOOP_PAYOFF = 120;
const BOOP_END = 560;
const SQUASH_MS = 420;

const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1600;
const DIZZY_END = 1100;

const SQUASH = [
  { transform: "scale(1, 1)", easing: "ease-in" },
  {
    transform: "scale(1.10, 0.86)",
    offset: 0.18,
    easing: "ease-out",
  },
  {
    transform: "scale(0.95, 1.08)",
    offset: 0.45,
    easing: "ease-in-out",
  },
  {
    transform: "scale(1.03, 0.97)",
    offset: 0.72,
    easing: "ease-in-out",
  },
  { transform: "scale(1, 1)" },
];

function cell(index) {
  return {
    backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
  };
}

function wrap(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

const layer = {
  position: "absolute",
  inset: 0,
  backgroundSize: "300% 300%",
  backgroundRepeat: "no-repeat",
};

export function Mascot({
  directions,
  reactions,
  size = 140,
  className,
  label = "mascot",
}) {
  const buttonRef = useRef(null);
  const squashRef = useRef(null);

  const timersRef = useRef([]);
  const boopsRef = useRef({
    count: 0,
    at: 0,
  });

  const [direction, setDirection] = useState("center");
  const [reaction, setReaction] = useState(null);

  // Cursor tracking
  useEffect(() => {
    // Only enable cursor tracking on devices that support hover
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let sector = -1;

    let pointer = null;

    const aim = () => {
      const button = buttonRef.current;

      if (!button || !pointer) {
        return;
      }

      const box = button.getBoundingClientRect();

      // Find the center of the mascot
      const mascotX = box.left + box.width / 2;
      const mascotY = box.top + box.height / 2;

      // Distance between cursor and mascot
      const dx = pointer.x - mascotX;
      const dy = pointer.y - mascotY;

      const distance = Math.hypot(dx, dy);

      // -----------------------------------------
      // CURSOR IS TOO FAR AWAY
      // -----------------------------------------

      if (distance > INTERACTION_RADIUS) {
        sector = -1;
        setDirection("center");
        return;
      }

      // -----------------------------------------
      // CURSOR IS VERY CLOSE
      // -----------------------------------------

      if (distance < DEAD_ZONE) {
        sector = -1;
        setDirection("center");
        return;
      }

      // -----------------------------------------
      // CURSOR IS WITHIN INTERACTION RANGE
      // -----------------------------------------

      const angle = Math.atan2(dy, dx);

      // Prevent unnecessary direction changes
      if (
        sector !== -1 &&
        Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS
      ) {
        return;
      }

      sector =
        (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;

      setDirection(CLOCKWISE[sector]);
    };

    const onPointerMove = (event) => {
      pointer = {
        x: event.clientX,
        y: event.clientY,
      };

      aim();
    };

    window.addEventListener("pointermove", onPointerMove, {
      passive: true,
    });

    window.addEventListener("scroll", aim, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", aim);
    };
  }, []);

  // Clear timers when component is removed
  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout);
    };
  }, []);

  // Click / Boop reaction
  const boop = () => {
    console.log("Mascot clicked");

    timersRef.current.forEach(window.clearTimeout);

    timersRef.current = [];

    const later = (ms, next) => {
      timersRef.current.push(
        window.setTimeout(() => {
          setReaction(next);
        }, ms),
      );
    };

    const now = Date.now();

    const boops = boopsRef.current;

    boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1;

    boops.at = now;

    // -----------------------------------------
    // DIZZY AFTER MULTIPLE CLICKS
    // -----------------------------------------

    if (boops.count >= DIZZY_AFTER) {
      boops.count = 0;

      setReaction("dizzy");

      later(DIZZY_END, null);
    } else {
      // Normal boop reaction
      setReaction("blink");

      later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length]);

      later(BOOP_END, null);
    }

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Squash animation
    squashRef.current?.animate(SQUASH, {
      duration: SQUASH_MS,
      easing: "linear",
    });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={boop}
      aria-label={`Boop the ${label}`}
      className={className}
      style={{
        position: "relative",
        display: "block",
        flexShrink: 0,
        width: size,
        height: size,
        padding: 0,
        border: 0,
        background: "transparent",
        appearance: "none",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <span
        ref={squashRef}
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "100%",
          transformOrigin: "50% 78%",
        }}
      >
        {/* Direction sprite */}
        <span
          style={{
            ...layer,
            backgroundImage: `url(${directions})`,
            ...cell(DIRECTIONS.indexOf(direction)),
            opacity: reaction ? 0 : 1,
          }}
        />

        {/* Reaction sprite */}
        <span
          style={{
            ...layer,
            backgroundImage: `url(${reactions})`,
            ...cell(REACTIONS.indexOf(reaction ?? "blink")),
            opacity: reaction ? 1 : 0,
          }}
        />
      </span>
    </button>
  );
}

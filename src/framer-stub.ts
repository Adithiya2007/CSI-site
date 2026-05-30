import React from "react";
export * from "framer-motion";

export const addPropertyControls = () => {};
export const useIsStaticRenderer = () => false;
export const useActiveVariantCallback = (baseVariant: any) => ({
  activeVariantCallback: (cb: any) => cb,
  delay: () => {}
});
export const SmartComponentScopedContainer = ({ children }: any) => children;
export const useVariantState = ({ defaultVariant, enabledGestures, variant }: any) => {
  const [currentVariant, setCurrentVariant] = React.useState(variant || defaultVariant);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const activeVariant = variant || (isPressed ? `${defaultVariant}-press` : isHovered ? `${defaultVariant}-hover` : defaultVariant);

  const gestureHandlers: any = {};
  if (enabledGestures?.[defaultVariant]?.hover) {
    gestureHandlers.onMouseEnter = () => setIsHovered(true);
    gestureHandlers.onMouseLeave = () => setIsHovered(false);
  }
  if (enabledGestures?.[defaultVariant]?.press) {
    gestureHandlers.onMouseDown = () => setIsPressed(true);
    gestureHandlers.onMouseUp = () => setIsPressed(false);
    gestureHandlers.onMouseLeave = () => {
      setIsHovered(false);
      setIsPressed(false);
    };
  }

  return {
    baseVariant: activeVariant,
    classNames: isHovered ? "hover" : "",
    clearLoadingGesture: () => {},
    gestureHandlers,
    gestureVariant: isHovered ? `${defaultVariant}-hover` : null,
    isLoading: false,
    setGestureState: () => {},
    setVariant: setCurrentVariant,
    variants: [activeVariant]
  };
};
export const SVG = ({ 
  __fromCanvasComponent, layoutDependency, layoutId, transformTemplate, verticalAlignment, 
  withExternalLayout, requiresOverflowVisible, ...props 
}: any) => React.createElement("svg", props);
export const Color = {
  toRgbString: () => "rgb(0,0,0)",
  toHex: () => "#000000",
  toHslString: () => "hsl(0,0%,0%)",
  isColor: () => false
};
export const useIsInCurrentNavigationTarget = () => true;
export const getFonts = () => [];
export const getPropertyControls = () => ({});
export const fontStore = { load: () => {} };
export const useSVGTemplate = () => null;
export const ControlType = {
  Boolean: "boolean",
  Number: "number",
  String: "string",
  Color: "color",
  Image: "image",
  File: "file",
  Enum: "enum",
  ComponentInstance: "componentinstance",
  Array: "array",
  Object: "object",
  Transition: "transition",
};

export const RenderTarget = {
  current: () => 1, // 1 = Web (forces video and interactive elements to work)
  hasRestrictions: () => false,
};

// Stubs for Framer runtime components
export const cx = (...args: any[]) => args.filter(Boolean).join(" ");
export const useComponentViewport = () => ({ width: 1000, height: 1000 });
export const useLocaleInfo = () => ({ locale: "en-US", direction: "ltr" });
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
export const addFonts = () => {};
export const withCSS = (Component: any, css?: string[]) => {
  if (typeof window !== "undefined" && css && Array.isArray(css)) {
    css.forEach((styleRule) => {
      let hash = 0;
      for (let i = 0; i < styleRule.length; i++) {
        hash = (hash << 5) - hash + styleRule.charCodeAt(i);
        hash |= 0;
      }
      const id = `framer-css-${hash.toString()}`;
      if (!document.getElementById(id)) {
        const style = document.createElement("style");
        style.id = id;
        style.innerHTML = styleRule;
        document.head.appendChild(style);
      }
    });
  }
  return Component;
};
export const RichText = ({ 
  __fromCanvasComponent, layoutDependency, layoutId, transformTemplate, verticalAlignment, 
  withExternalLayout, requiresOverflowVisible, text, children, style, ...props 
}: any) => {
  const hasExplicitColor = style && (
    style.color || 
    style["--framer-text-color"] || 
    Object.keys(style).some(k => k.startsWith("--extracted-"))
  );

  const customStyle = {
    textAlign: "center" as const,
    color: hasExplicitColor ? undefined : "#111111",
    fontFamily: "var(--font-inter), sans-serif",
    ...style
  };

  return React.createElement("div", { style: customStyle, ...props }, text !== undefined ? text : children);
};
export const Image = ({ 
  __fromCanvasComponent, layoutDependency, layoutId, transformTemplate, verticalAlignment, 
  withExternalLayout, requiresOverflowVisible, background, ...props 
}: any) => {
  const src = background?.src || props.src;
  return React.createElement("img", { src, ...props });
};
export const Link = ({ href, ...props }: any) => React.createElement("a", { href: href === "" ? null : (href || undefined), ...props });
export const getLoadingLazyAtYPosition = () => 0;
export const ComponentViewportProvider = ({ children }: any) => React.createElement(React.Fragment, null, children);

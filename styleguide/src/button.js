import React from "react";

export default function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  const background =
    disabled || loading ? "opacity-50 bg-secondary" : "bg-warning";
  return (
    <button
      className="button"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
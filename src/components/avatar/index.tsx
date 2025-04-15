import React from "react";

interface AvatarProps {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ width, height, alt }) => {
  return (
    <img
      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt={alt}
      style={{ width, height }}
      className="rounded-full border border-white object-cover shadow-md"
    />
  );
};

export default Avatar;

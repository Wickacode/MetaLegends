import React from "react";

export default function FactionLeftBloc({
  activeAvatar,
  avatars,
  handleAvatarClick,
}) {
  return (
    <div className="factionsLeftBloc">
      {activeAvatar && (
        <div className="avatarActive">
          <img src={activeAvatar} alt="" />
        </div>
      )}
      <div className="avatarsGallery">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt=""
            onClick={() => handleAvatarClick(avatar)}
          />
        ))}
      </div>
    </div>
  );
}

import "../styles/postoptionsmenu.css";
import { FiEdit2, FiX } from "react-icons/fi";

export default function PostOptionsMenu({ onEdit, onDelete }) {
  return (
    <div className="post-options-menu">
      <button
        className="post-options-menu-item"
        onClick={onEdit}
      >
        <FiEdit2 className="post-options-menu-icon" />
        Edit Post
      </button>

      <div className="post-options-menu-separator"></div>

      <button
        className="post-options-menu-item post-options-menu-item-delete"
        onClick={onDelete}
      >
        <FiX className="post-options-menu-icon" />
        Delete Post
      </button>
    </div>
  );
}

import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  position = "left",
  children,
}) => {
  // Disable scrolling on the body when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sidebarStyle = {
    transform: isOpen
      ? "translateX(0)"
      : position === "left"
      ? "translateX(-100%)"
      : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  const sidebarPosition = position === "left" ? "left-0" : "right-0";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 ${sidebarPosition} h-full w-64 bg-white shadow-lg z-40 overflow-y-auto`}
        style={sidebarStyle}
      >
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          &#x2715;
        </button>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;

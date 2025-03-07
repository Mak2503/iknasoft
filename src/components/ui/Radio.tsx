const RadioButton = ({
  value,
  checked,
  onChange,
  name,
}: {
  value: string;
  checked: boolean;
  onChange: () => void;
  name: string;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          cursor: "pointer",
        }}
      >
        <div style={{ position: "relative", width: "24px", height: "24px" }}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            style={{
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: `2px solid ${checked ? "#FF916E" : "#9ca3af"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.3s",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#FF916E",
                opacity: checked ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            ></div>
          </div>
        </div>
        <span>{value}</span>
      </label>
    </div>
  );
};

export default RadioButton;

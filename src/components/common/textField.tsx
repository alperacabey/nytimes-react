import React, { useState } from "react";
interface TextFieldProps {
  id?: string;
  value: string;
  label?: string;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  debounce?: number;
  onChange?: Function;
  onClick?: Function;
  onKeyPress?: Function;
}

let timeout: any = null;

const TextField: React.FC<TextFieldProps> = ({
  id = "textField",
  value,
  label = "",
  placeholder = "",
  loading = false,
  disabled = false,
  debounce = 0,
  onChange,
  onKeyPress = () => {},
  onClick = () => {},
}) => {
  const [text, setText] = useState<string>(value);

  React.useEffect(() => {
    if (timeout) clearTimeout(timeout);
    if (debounce)
      timeout = setTimeout(() => {
        onChange && onChange(text);
      }, debounce);
    else onChange && onChange(text);
  }, [text, debounce, onChange]);

  return (
    <div>
      {label && <h3 className="bold p-0">{label}</h3>}
      <input
        id={id}
        name={id}
        autoComplete="off"
        value={text || value}
        onChange={(e) => onChange && setText(e.target.value)}
        disabled={disabled}
        type={"text"}
        placeholder={placeholder}
        data-tip
        data-for={`${id}Tip`}
        onKeyPress={onKeyPress()}
        onClick={onClick()}
        data-test="textfield-input"
        style={{ width: "100%", height: "30px", fontSize: "18px" }}
      ></input>
      {loading && (
        <div style={{ right: "40px", position: "absolute", width: "auto" }}>
          <div className="loader" data-test="textfield-loader" />
        </div>
      )}
    </div>
  );
};

export default TextField;

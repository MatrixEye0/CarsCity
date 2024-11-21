import React from "react";
import { Textarea } from "@/components/ui/textarea";

function TextAreaField({ item, handleInputChange }) {
  alert(item.name)
  return (
    <div>
      <textarea
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        required={item?.required || true}
      />
    </div>
  );
}

export default TextAreaField;

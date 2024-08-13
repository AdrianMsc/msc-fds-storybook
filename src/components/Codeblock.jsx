import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Codeblock = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="htmlbars"
      style={atomOneDark}
      className="max-[1500px] mb-4 mt-2 rounded"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Codeblock;

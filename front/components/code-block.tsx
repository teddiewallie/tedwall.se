const CodeBlock = (props: {
  code: string
}) => {
  const { code } = props;

  return (
    <pre>
      {code}
    </pre>
  )
};

export default CodeBlock;

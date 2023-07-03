import CodeBlockComponent from '../../../components/code-block';

const exampleCode = `const foo = 'bar';
if (foo === 'bar') {
  echo 'foo is bar';
}`;

const CodeBlock = () => (
  <>
    <CodeBlockComponent code={exampleCode} />
  </>
);

export default CodeBlock;


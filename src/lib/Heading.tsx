interface HeadingProps {
  tag: string;
  children: any;
}

export default function Heading({ tag = "h1", children }: HeadingProps) {
  const htmlTemplate: string = `<${tag}>${children}</${tag}>`.trim();

  return <div dangerouslySetInnerHTML={{ __html: htmlTemplate }} />;
}

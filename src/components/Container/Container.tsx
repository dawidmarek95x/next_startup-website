const Container = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`m-0 px-[20px] xxl:px-[130px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;

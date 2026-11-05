type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({ children, isLoading, ...rest }: Props) {
  return (
    <button
      type="button"
      disabled={isLoading}
      {...rest}
      className="flex items-center justify-center rounded-2xl text-white
      cursor-pointer bg-green-100 hover:bg-green-200 transition 
      ease-linear disabled:opacity-50 disabled:cursor-progress h-12 font-semibold"
    >
      {children}
    </button>
  );
}

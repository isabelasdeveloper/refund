type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset
      className="flex flex-1 max-h-20 text-gray-200 
    focus-within:text-green-100"
    >
      <legend className="text-base mb-3 text-inherit font-semibold">
        {legend}
      </legend>
      <input
        {...rest}
        className=" w-full h-12 rounded-lg  border border-gray-300 px-4 text-sm 
        text-gray-100 bg-transparent outline-none 
        focus:border-1.7 focus:border-green-100 placeholder-gray-300"
      />
    </fieldset>
  );
}

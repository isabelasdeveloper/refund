import upload from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
  legend: string;
};

export function Upload({ filename, legend, ...rest }: Props) {
  return (
    <div>
      <legend className="text-xxs text-gray-200 mb-2 font-bold">
        {legend}
      </legend>

      <div
        className="w-full h-12 flex items-center rounded-lg border 
      border-gray-300 text-sm text-gray-100 bg-transparent outline-none"
      >
        <input type="file" id="upload" className="hidden" {...rest} />
        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="flex h-full px-4 items-center bg-green-100 rounded-lg 
          text-white cursor-pointer disable:opacity-50 hover:bg-green-200 transition ease-linear"
        >
          <img src={upload} alt="Ícone de upload" className="w-6 h-6" />
        </label>
      </div>
    </div>
  );
}

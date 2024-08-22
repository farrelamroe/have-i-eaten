export function Textarea(props: any) {
  const { label, htmlFor, id, name, isRequired, value, onChange } = props;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-gray-700 block text-sm font-medium"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none sm:text-sm lg:max-w-[500px]"
      />
    </div>
  );
}

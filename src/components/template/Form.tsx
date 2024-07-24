export function Form(props: any) {
  const { label, htmlFor, type, id, name, isRequired } = props;
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-gray-700 block text-sm font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={isRequired}
        className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full max-w-full rounded-full border px-3 py-2 shadow-sm focus:outline-none lg:max-w-[500px] sm:text-sm"
      />
    </div>
  );
}

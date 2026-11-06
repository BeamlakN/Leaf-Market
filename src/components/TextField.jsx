import { focusRing } from '../styles.js';

function TextField({ label, name, type = 'text', placeholder, autoComplete, value, error, disabled, onChange, onBlur }) {
  const errorId = `${name}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`h-field w-full rounded-lg border px-3 text-sm transition placeholder:text-muted disabled:cursor-not-allowed disabled:bg-page ${focusRing} ${
          error ? 'border-danger' : 'border-line'
        }`}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;

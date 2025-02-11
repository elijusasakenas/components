import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

const Alert = ({ headline, message, type, ...props }) => (
  <div
    className={
      "rounded-md m-4 p-4 animate-fade-in " +
      (type === "warning"
        ? "bg-yellow-50"
        : type === "success"
        ? "bg-green-50"
        : type === "info"
        ? "bg-blue-50"
        : "bg-red-50")
    }
  >
    <div className="flex justify-start items-start">
      <div className="flex-shrink-0">
        {type === "warning" && (
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        )}
        {type === "success" && (
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        )}
        {type === "alert" && (
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        )}
        {type === "info" && (
          <InformationCircleIcon
            className="h-5 w-5 text-blue-700"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="ml-3">
        <h3
          className={
            "font-bold " +
            (type === "warning"
              ? "text-yellow-800"
              : type === "success"
              ? "text-green-800"
              : type === "info"
              ? "text-blue-700"
              : "text-red-800")
          }
        >
          {headline}
        </h3>
        <div
          className={
            "mt-2 text-sm " +
            (type === "warning"
              ? "text-yellow-700"
              : type === "success"
              ? "text-green-700"
              : type === "info"
              ? "text-neutral-900"
              : "text-red-700")
          }
        >
          <p>{message}</p>
        </div>
      </div>
    </div>
  </div>
);
export default Alert;

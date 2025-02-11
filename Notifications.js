import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowNotifications } from "@/redux/notifications/notifications";

const Notifications = () => {
  const dispatch = useDispatch();
  const showNotifications = useSelector((state) => state.notifications.show);
  const NotificationSuccess = useSelector(
    (state) => state.notifications.success
  );
  const NotificationMessage = useSelector(
    (state) => state.notifications.message
  );

  const onCloseDialog = () => {
    dispatch(setShowNotifications(false));
  }

  return (
    <Transition show={showNotifications} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCloseDialog}>
        <div className="pointer-events-none fixed top-0 right-0 flex max-w-full">
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            <TransitionChild
              as={Fragment}
              enter="transform ease-out duration-600 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-200 sm:translate-x-0"
              leave="transition ease-in duration-600"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogPanel className="pointer-events-auto w-screen max-w-sm overflow-hidden rounded-lg bg-base-500 shadow-lg ring-1 ring-black ring-opacity-5 p-4">
                <div className="flex items-start flex-row">
                  <div className="flex-shrink-0">
                    {NotificationSuccess ? (
                      <CheckCircleIcon
                        className="h-10 w-10 text-base-50"
                        aria-hidden="true"
                      />
                    ) : (
                      <ExclamationCircleIcon
                        className="h-10 w-10 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="mt-1 body-small">{NotificationMessage}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="btn-secondary btn-small"
                      onClick={() => {
                        dispatch(setShowNotifications(false));
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Notifications;

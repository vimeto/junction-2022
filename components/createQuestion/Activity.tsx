
interface ActivityProps {
  activity: number | undefined;
  onActivityChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ActivityComponent: React.FC<ActivityProps> = ({ activity, onActivityChange }) => {
  return (
    <div className="mt-5">
      <p className="mb-2 text-lg text-center">Activivity level</p>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="activity-not-active"
              value={0}
              checked={activity === 0}
              onChange={onActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="activity-not-active"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Not active
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="activity-semi-active"
              value={10}
              checked={activity === 10}
              onChange={onActivityChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="activity-semi-active"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Medium active
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="activity-active"
              value={20}
              checked={activity === 20}
              onChange={onActivityChange}
              className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="activity-active"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Active
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ActivityComponent;


interface FeedbackTypeProps {
  feedbackType: string;
  onFeedBackTypeChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FeedbackType: React.FC<FeedbackTypeProps> = ({ feedbackType, onFeedBackTypeChange }) => {
  return (
    <div className="mt-5">
      <p className="mb-2 text-lg text-center">Feedback type </p>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="feedback-freetext"
              value={"freeText"}
              checked={feedbackType === "freeText"}
              onChange={onFeedBackTypeChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="feedback-freetext"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Free text
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="feedback-freetext-pic"
              value={"freeTextWithImage"}
              checked={feedbackType === "freeTextWithImage"}
              onChange={onFeedBackTypeChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="feedback-freetext-pic"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Free text + pic
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="feedback-multiple-choice"
              value={"multipleChoice"}
              checked={feedbackType === "multipleChoice"}
              onChange={onFeedBackTypeChange}
              className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="feedback-multiple-choice"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Multiple choice
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="feedback-mark-completed"
              value={"markCompleted"}
              checked={feedbackType === "markCompleted"}
              onChange={onFeedBackTypeChange}
              className=" text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="feedback-mark-completed"
              className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Mark Completed
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FeedbackType;

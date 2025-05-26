type ResetButtonProps = {
    onReset: () => void;
};

const ResetButton = ({ onReset }: ResetButtonProps) => {
    return (
        <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={onReset}
        >
            Reset
        </button>
    );
};

export default ResetButton;
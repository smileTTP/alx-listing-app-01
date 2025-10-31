
const Description: React.FC<{ description: string }> = ({ description }) => {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{description}</p>
        </div>
    );
}
export default Description;
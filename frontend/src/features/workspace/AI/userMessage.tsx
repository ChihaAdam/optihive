function UserMessage({ message }: { message: string }) {
  return (
    <div className=" bg-primary text-black px-4 py-2 rounded-lg self-end">
      {message}
    </div>
  );
}
export default UserMessage;

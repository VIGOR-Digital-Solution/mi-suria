export default function Header({ title }: { title: string }) {
  return (
    <div className="items-center flex p-6">
      <p className="text-3xl font-bold">{title}</p>
    </div>
  );
}

import { useSelector } from "react-redux";

function Header() {
  const members = useSelector((state) => state.reducer_file);
  return (
    <div className="header">
      <h2>Header</h2>

      <div className="headerPlus">
        {members.map((member) => (
          <p key={member.id}>{member.name}</p>
        ))}
      </div>
      <div className="headerPlus">
        {members.map((member) => (
          <p key={member.id}>{member.age} ans</p>
        ))}
      </div>
    </div>
  );
}

export default Header;

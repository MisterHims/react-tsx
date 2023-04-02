import DarkModeButton from "../../components/buttons/DarkModeButton";
import GitHubButton from "../../components/buttons/GitHubButton";

const HeaderTools = () => {
  return (
    <div className="header-tools">
      <DarkModeButton />
      <GitHubButton />
    </div>
  );
}

export default HeaderTools
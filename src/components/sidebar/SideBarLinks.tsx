import { NavLink } from "react-router-dom"

const SideBarDefaultLinks = () => {
  return (
    <div>Sidebar Default Links</div>
  );
}

const SideBarDocsLinks = () => {
  return (
    <ul className="sidebar-links">
      <li className="links-group">
        <h5>Get started</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/myreact/presentation"
            >
              Présentation
            </NavLink>
          </li>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/myreact/installation"
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>TypeScript</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/typescript/presentation"
            >
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>PostCSS</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/postcss/presentation"
            >
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>Material-UI</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/material-ui/presentation"
            >
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>TailwindCSS</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/tailwindcss/presentation"
            >
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>Flowbite</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/docs/flowbite/presentation"
            >
              Présentation
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

const SideBarExercicesLinks = () => {
  return (
    <ul className="sidebar-links">
      <li className="links-group">
        <h5>TypeScript</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/exercices/typescript/exercice-01"
            >
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>PostCSS</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/exercices/postcss/exercice-01"
            >
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>Material-UI</h5>
        <ul>
          <li>
            <NavLink className="-ml-px hover:border-slate-400 dark:hover:border-slate-500" to="/exercices/material-ui/exercice-01" > Exercice n°1 </NavLink>
            <NavLink className="-ml-px hover:border-slate-400 dark:hover:border-slate-500" to="/exercices/material-ui/exercice-02" > Exercice n°2 - React Menu </NavLink>
            <NavLink className="-ml-px hover:border-slate-400 dark:hover:border-slate-500" to="/exercices/material-ui/exercice-03" > Exercice n°3 - Custom CSS </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>TailwindCSS</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/exercices/tailwindcss/exercice-01"
            >
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="links-group">
        <h5>Flowbite</h5>
        <ul>
          <li>
            <NavLink
              className="-ml-px hover:border-slate-400 dark:hover:border-slate-500"
              to="/exercices/flowbite/exercice-01"
            >
              Exercice n°1
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default SideBarDefaultLinks;
export { SideBarDocsLinks, SideBarExercicesLinks };
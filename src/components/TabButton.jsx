function TabButton({ children, isSelected, ...props }) {
  console.log("excuting tabbutton");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;

function AppFooter() {
  //Turnary
  // if and else
  let showCompanyName = false;

  function getInfo() {
    if (showCompanyName) {
      return <h3>Copyright by Training Institute</h3>;
    }

    return <h3>Copyright by Some Company</h3>;
  }

  return <footer>{getInfo()}</footer>;
}

export default AppFooter;

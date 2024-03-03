type Props = {
  navText: string;
}

const NavText = (props: Props) => {
  const {navText} = props;
  return (
    <>
    <a>{navText}</a>
    </>
    )
}

export default NavText
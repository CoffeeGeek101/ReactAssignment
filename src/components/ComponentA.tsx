import { useAppSelector } from '../redux/store';
import ComponentB from './ComponentB';

const ComponentA = () => {

    const cerdol = useAppSelector((state) => state.cerdolValue.cerdol);

  return (
    <ComponentB cerdol={cerdol}/>
  )
}

export default ComponentA
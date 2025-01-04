import{render,screen ,fireEvent} from '@testing-library/react';
import Counter from './counter';
test('render learn react link', () => { 
    render(<Counter />);

    const countElement =screen.getByText(/Count :/i);
    const buttonElement =screen.getByText(/increment/i);
    const countElement1 =screen.getByText(/count1 :/i);


    expect(countElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement)
    expect(screen.getByText(/Count : 1/i)).toBeInTheDocument();
    expect(screen.getByText(/count1 : 3/i)).toBeInTheDocument();


 })
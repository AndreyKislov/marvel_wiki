import {styled, useTheme} from 'styled-components';
import Title from '../titles/Title.jsx';
import Button from '../buttons/Buttons.jsx';
import {Field, Form, Formik} from 'formik';
import useMarvelService from '../../services/useMarvelService.js';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const StyledWrapper = styled.div`
    padding: 25px;
    background: ${({theme}) => theme.color.form.background};
    position: sticky;
    top: 47%;
    box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.35);
    margin-top: 20px;

`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`;


const StyledButton = styled(Button)`
    min-width: ${({$width}) => $width};
`;

const InputWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

const StyledField = styled(Field)`
    border: none;
    box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 38px;
`;


// eslint-disable-next-line react/prop-types
export default function SearchFrom({characterName}) {
    const theme = useTheme();
    const {loading, error, resetError, getCharacterId} = useMarvelService();
    const [id, setId] = useState('');
    return (
        <StyledWrapper>
            <Formik initialValues={{
                name: characterName,
            }} enableReinitialize={true}
                    onSubmit={
                        ((values) => getCharacterId(values.name)
                            .then(res => {
                                setId(res);
                            }).catch(() => {
                                console.log(error);
                                setId('');
                            }))
                    }
                    validate={(values) => {
                        resetError();
                        setId('');
                        const errors = {};
                        if (!values.name && values.name.trim().length <= 0) {
                            errors.name = 'Field is required';
                        }
                        return errors;
                    }}
            >
                {({errors}) => {
                    return (
                        <StyledForm>
                            <label htmlFor='name'>
                                <Title $size='18px' $transform='none' $color={theme.color.text.dark}
                                       $margin='0 0 20px 0'>
                                    Or find a character by name:
                                </Title>
                            </label>
                            <InputWrapper>
                                <StyledField type='text' name='name' />
                                <StyledButton $primary $width='100px'
                                              type='submit'
                                              disabled={loading}>{loading ? 'Wait' : 'Find'}</StyledButton>
                            </InputWrapper>
                            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage> ||
                            error && <ErrorMessage>{error.status}</ErrorMessage> ||
                            id && <SuccessPanel id={id} name=''/>}
                        </StyledForm>
                    );
                }}
            </Formik>
        </StyledWrapper>

    );
}

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({children}) => {
    const theme = useTheme();
    return (
        <Title $size='18px'
               $transform='none'
               $color={theme.color.text.primary}
               $margin='10px 0 0 0'>
            {children}
        </Title>
    );
};

// eslint-disable-next-line react/prop-types
const SuccessPanel = ({name, id}) => {
    const theme = useTheme();
    const PanelWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    `;
    return (
        <PanelWrapper>
            <Title $size='18px'
                   $transform='none'
                   $color={theme.color.text.success}
                   $margin='10px 0 0 0'>
                There is! Visit {name} page!
            </Title>
            <Link to={`/characters/${id}`}>
                <StyledButton $width='100px' type='submit'>To page</StyledButton>
            </Link>
        </PanelWrapper>
    );
};
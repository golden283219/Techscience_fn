import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from '../components/Pages/Home'
import SignIn from '../components/Pages/Auth/SignIn'
import SignUp from '../components/Pages/Auth/SignUp'
import ChangePassword from '../components/Pages/Auth/ChangePassword'
import ForgotPassword from '../components/Pages/Auth/ForgotPassword'
import ResetPassword from '../components/Pages/Auth/ResetPassword'
import Account from '../components/Pages/Admin/Account'
import User from '../components/Pages/Admin/User'
import Preschool from '../components/Pages/Admin/Preschool'
import Exam from '../components/Pages/Exam/Exam'
import Result from '../components/Pages/Exam/Result'
import Student from '../components/Pages/Student/Student'
import Learning from '../components/Pages/Learning/Learning'
import Numbers from '../components/Pages/Learning/Numbers'
import Alphabet from '../components/Pages/Learning/Alphabet'
import WritingLetters from '../components/Pages/Learning/WritingLetters'
import LetterComponent from '../components/Utils/Contents/Learning/WritingLetters/LetterComponent/letter-component'
import ColoringGeometricFigures from '../components/Pages/Learning/ColoringGeometricFigures'
import LearnToRead from '../components/Pages/Learning/LearnToRead'
import FillingMissingLetters from '../components/Pages/Learning/FillingMissingLetters'
import CountingNumbers from '../components/Pages/Learning/CountingNumbers'
import ABCGames from '../components/Pages/Learning/ABCGames'
import NumberGames from '../components/Pages/Learning/NumberGames'
import Arithmetic from '../components/Pages/Learning/Arithmetic/Arithmetic'
import Addition from '../components/Pages/Learning/Arithmetic/Addition'
import Substraction from '../components/Pages/Learning/Arithmetic/Substraction'
import Multiplication from '../components/Pages/Learning/Arithmetic/Multiplication'
import Division from '../components/Pages/Learning/Arithmetic/Division'
import FileSharing from "../components/Pages/FileSharing/FileSharing";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/sign_in" component={ SignIn } />
            <Route path="/sign_up" component={ SignUp } />
            <ProtectedRoute path="/change_password" component={ ChangePassword } />
            <ProtectedRoute path="/forgot_password" role={ -1 } component={ ForgotPassword } />
            <ProtectedRoute path="/reset_password/:resetToken" role={ -1 } component={ ResetPassword } />
            <ProtectedRoute path="/file_sharing" component={ FileSharing } />
            <ProtectedRoute exact path="/learning" component={ Learning } />
            <ProtectedRoute path="/learning/numbers" component={ Numbers } />
            <ProtectedRoute path="/learning/coloring_geometric_figures" component={ ColoringGeometricFigures } />
            <ProtectedRoute path="/learning/learn_to_read" component={ LearnToRead } />
            <ProtectedRoute path="/learning/alphabet" component={ Alphabet } />
            <ProtectedRoute exact path="/learning/writingletters" component={ WritingLetters } />
            <ProtectedRoute path="/learning/writingletters/:letter" component={ LetterComponent }/>
            <ProtectedRoute path="/learning/filling_missing_letters" component={ FillingMissingLetters } />
            <ProtectedRoute path="/learning/counting_numbers" component={ CountingNumbers } />
            <ProtectedRoute path="/learning/abc_games" component={ ABCGames } />
            <ProtectedRoute path="/learning/number_games" component={ NumberGames } />
            <ProtectedRoute exact path="/learning/arithmetic" component={ Arithmetic } />
            <ProtectedRoute path="/learning/arithmetic/addition" component={ Addition } />
            <ProtectedRoute path="/learning/arithmetic/substraction" component={ Substraction } />
            <ProtectedRoute path="/learning/arithmetic/multiplication" component={ Multiplication } />
            <ProtectedRoute path="/learning/arithmetic/division" component={ Division } />
            <ProtectedRoute path="/student" role={ 3 } component={ Student } />
            <ProtectedRoute path="/exam" role={ 2 } component={ Exam } />
            <ProtectedRoute path="/result" role={ 2 } component={ Result } />
            <ProtectedRoute path="/users" role={ 2 } component={ User } />
            <ProtectedRoute path="/admin" role={ 1 } component={ Account } />
            <ProtectedRoute path="/preschool" component={ Preschool } />
        </Switch>
    </BrowserRouter>
)
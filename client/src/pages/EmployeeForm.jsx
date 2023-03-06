import { useReducer } from 'react';
import './EmployeeFrom.css';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employeeSlice';

const initialFormData = {
  fullName: '',
  nameWithInitial: '',
  displayName: '',
  gender: 'male',
  birthday: '',
  email: '',
  mobileNo: '',
  designation: '',
  employeeType: 'Full time',
  joinedDate: '',
  experience: '01 Years',
  salary: '',
  notes: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'fullName':
      return { ...state, fullName: action.payload };
    case 'nameWithInitial':
      return { ...state, nameWithInitial: action.payload };
    case 'displayName':
      return { ...state, displayName: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'birthday':
      return { ...state, birthday: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'mobileNo':
      return { ...state, mobileNo: action.payload };
    case 'designation':
      return { ...state, designation: action.payload };
    case 'employeeType':
      return { ...state, employeeType: action.payload };
    case 'joinedDate':
      return { ...state, joinedDate: action.payload };
    case 'experience':
      return { ...state, experience: action.payload };
    case 'salary':
      return { ...state, salary: action.payload };
    case 'notes':
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

function EmployeeForm() {
  const [formData, setFormData] = useReducer(formReducer, initialFormData);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(addEmployee(formData));
    // setFormData(initialFormData);
  };

  return (
    <section className="form">
      <label htmlFor="text">Add People</label>
      <div>__________________________________________</div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={(e) => {
              setFormData({ type: 'fullName', payload: e.target.value });
            }}
          />
          <label htmlFor="nameWithInitial">Name with initials*</label>
          <input
            type="text"
            name="nameWithInitial"
            id="nameWithInitial"
            value={formData.nameWithInitial}
            placeholder="Name with initials"
            onChange={(e) => {
              setFormData({ type: 'nameWithInitial', payload: e.target.value });
            }}
          />
          <label htmlFor="displayName">Preferred /Display Name</label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            value={formData.displayName}
            placeholder="Display Name"
            onChange={(e) => {
              setFormData({ type: 'displayName', payload: e.target.value });
            }}
          />

          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={(e) => {
              console.log(e.target.value);
              setFormData({ type: 'gender', payload: e.target.value });
            }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="birthday">Date of Birth</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={formData.birthday}
            min="1963-03-07"
            max="2005-03-07"
            onChange={(e) => {
              setFormData({ type: 'birthday', payload: e.target.value });
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={(e) => {
              setFormData({ type: 'email', payload: e.target.value });
            }}
          />
          <label htmlFor="mobileNo">Mobile Number</label>
          <input
            type="text"
            name="mobileNo"
            id="mobileNo"
            value={formData.mobileNo}
            placeholder="Mobile Number"
            onChange={(e) => {
              setFormData({ type: 'mobileNo', payload: e.target.value });
            }}
          />
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            placeholder="Designation"
            onChange={(e) => {
              setFormData({ type: 'designation', payload: e.target.value });
            }}
          />
          <label htmlFor="employeeType">Employee Type</label>
          <select
            name="employeeType"
            id="employeeType"
            value={formData.employeeType}
            onChange={(e) => {
              setFormData({ type: 'employeeType', payload: e.target.value });
            }}
          >
            <option value="Full time">Full time </option>
            <option value="Part time">Part time</option>
            <option value="Contract Basis">Contract Basis</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="joinedDate">Joined Date</label>
          <input
            type="date"
            name="joinedDate"
            id="joinedDate"
            min="1963-03-06"
            max="2023-03-06"
            value={formData.joinedDate}
            onChange={(e) => {
              setFormData({ type: 'joinedDate', payload: e.target.value });
            }}
          />

          <label htmlFor="experience">Experience</label>
          <select
            name="experience"
            id="experience"
            value={formData.experience}
            onChange={(e) => {
              setFormData({ type: 'experience', payload: e.target.value });
            }}
          >
            <option value="01 Years">01 Years</option>
            <option value="02 Years">02 Years</option>
            <option value="03 Years">03 Years</option>
            <option value="04 Years">04 Years</option>
            <option value="05 Years">05 Years</option>
            <option value="06 Years">06 Years</option>
            <option value="07 Years">07 Years</option>
            <option value="08 Years">08 Years</option>
          </select>

          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={formData.salary}
            placeholder="Salary"
            onChange={(e) => {
              setFormData({ type: 'salary', payload: e.target.value });
            }}
          />

          <label htmlFor="notes">Personal Notes</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            cols="50"
            value={formData.notes}
            onChange={(e) => {
              setFormData({ type: 'notes', payload: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-block">cancel</button>
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;

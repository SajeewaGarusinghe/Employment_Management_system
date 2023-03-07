import { useEffect, useReducer } from 'react';
import './EmployeeFrom.css';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee } from '../features/employeeSlice';

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
    case 'editMode':
      return { ...action.payload };
    case 'reset':
      return { ...initialFormData };
    default:
      return state;
  }
};

function EmployeeForm() {
  const [formData, setFormData] = useReducer(formReducer, initialFormData);
  const dispatch = useDispatch();
  const { editMode, editEmployee } = useSelector((state) => state.employee);

  useEffect(() => {
    if (editMode) {
      setFormData({ type: 'editMode', payload: editEmployee });
    }
    return () => {
      setFormData({ type: 'reset' });
    };
  }, [editMode, editEmployee]);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!editMode) {
      dispatch(addEmployee(formData));
    } else {
      dispatch(updateEmployee(formData));
    }

    // setFormData(initialFormData);
  };

  const text = editMode
    ? `Edit Employee ${editEmployee.employeeId}`
    : 'Add People';

  return (
    <div className="dashbord">
      <div className="form">
        <div style={{ color: 'blue' }}>
          <label htmlFor="text">{text}</label>
        </div>

        <div className="form">
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                class="form-control"
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                placeholder="Full Name"
                onChange={(e) => {
                  setFormData({ type: 'fullName', payload: e.target.value });
                }}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="nameWithInitial" className="form-label">
                Name with initials*
              </label>
              <input
                class="form-control"
                type="text"
                name="nameWithInitial"
                id="nameWithInitial"
                value={formData.nameWithInitial}
                placeholder="Name with initials"
                onChange={(e) => {
                  setFormData({
                    type: 'nameWithInitial',
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="displayName" className="form-label">
                Preferred /Display Name
              </label>
              <input
                class="form-control"
                type="text"
                name="displayName"
                id="displayName"
                value={formData.displayName}
                placeholder="Display Name"
                onChange={(e) => {
                  setFormData({ type: 'displayName', payload: e.target.value });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                class="form-select"
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
            </div>
            <div className="col-md-6">
              <label htmlFor="birthday" className="form-label">
                Date of Birth
              </label>
              <input
                class="form-control"
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
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                class="form-control"
                type="text"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Email"
                onChange={(e) => {
                  setFormData({ type: 'email', payload: e.target.value });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mobileNo" className="form-label">
                Mobile Number
              </label>
              <input
                class="form-control"
                type="text"
                name="mobileNo"
                id="mobileNo"
                value={formData.mobileNo}
                placeholder="Mobile Number"
                onChange={(e) => {
                  setFormData({ type: 'mobileNo', payload: e.target.value });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                class="form-control"
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                placeholder="Designation"
                onChange={(e) => {
                  setFormData({ type: 'designation', payload: e.target.value });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="employeeType" className="form-label">
                Employee Type
              </label>
              <select
                class="form-select"
                name="employeeType"
                id="employeeType"
                value={formData.employeeType}
                onChange={(e) => {
                  setFormData({
                    type: 'employeeType',
                    payload: e.target.value,
                  });
                }}
              >
                <option value="Full time">Full time </option>
                <option value="Part time">Part time</option>
                <option value="Contract Basis">Contract Basis</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="joinedDate" className="form-label">
                Joined Date
              </label>
              <input
                class="form-control"
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
            </div>
            <div className="col-md-6">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <select
                class="form-select"
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
            </div>
            <div className="col-md-12">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                class="form-control"
                type="text"
                name="salary"
                id="salary"
                value={formData.salary}
                placeholder="Salary"
                onChange={(e) => {
                  setFormData({ type: 'salary', payload: e.target.value });
                }}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="notes" className="form-label">
                Personal Notes
              </label>
              <textarea
                class="form-control"
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

            <div className="col-md-6">
              <button class="btn btn-light">cancel</button>
              <button class="btn btn-primary" type="submit">
                {text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;

import React from 'react';
import { Container, Card, CardBody, Input, Select, Button, Textarea } from '@shadcn/ui';

const SettingsPage = () => {
  // Assume a state management hook is used to handle form values and changes
  const [formValues, setFormValues] = React.useState({
    username: '',
    email: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic
    console.log(formValues);
  };

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <h2>Profile</h2>
            <Input
              label="Username"
              name="username"
              placeholder="user"
              value={formValues.username}
              onChange={handleChange}
            />
            <Select
              label="Email"
              name="email"
              placeholder="Select a verified email to display"
              value={formValues.email}
              onChange={handleChange}
            >
              {/* Options would be populated dynamically */}
            </Select>
            <Textarea
              label="Bio"
              name="bio"
              placeholder="I own a computer."
              value={formValues.bio}
              onChange={handleChange}
            />
            <Button type="submit">Update Profile</Button>
          </CardBody>
        </form>
      </Card>
    </Container>
  );
};

export default SettingsPage;

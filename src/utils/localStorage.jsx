const employees = [
  {
    Id: 1,
    firstName: "Aarav",
    email: "e1@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile and analyze sales data for Q1.",
        taskDate: "2025-04-10",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend virtual meeting with client X.",
        taskDate: "2025-04-03",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Invoice",
        taskDescription: "Send invoice to vendor Y before deadline.",
        taskDate: "2025-03-29",
        category: "Finance"
      }
    ]
  },
  {
    Id: 2,
    firstName: "Neha",
    email: "e2@e.com",
    password: "123",
    taskCounts: { active: 2, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review recent merge requests on GitHub.",
        taskDate: "2025-04-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "Update API documentation for version 2.0.",
        taskDate: "2025-04-01",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Critical Bug",
        taskDescription: "Resolve production-level critical bug.",
        taskDate: "2025-03-28",
        category: "Bug Fixing"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Improvement",
        taskDescription: "Enhance the landing page design.",
        taskDate: "2025-04-11",
        category: "UI/UX"
      }
    ]
  },
  {
    Id: 3,
    firstName: "Rohan",
    email: "e3@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Strategy",
        taskDescription: "Develop strategy for new product launch.",
        taskDate: "2025-04-12",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Competitor Analysis",
        taskDescription: "Analyze top 3 competitors in the market.",
        taskDate: "2025-04-05",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Campaign Setup",
        taskDescription: "Set up Google Ads campaign.",
        taskDate: "2025-03-30",
        category: "Advertising"
      }
    ]
  },
  {
    Id: 4,
    firstName: "Priya",
    email: "e4@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Schedule and verify backups for all databases.",
        taskDate: "2025-04-10",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "System Maintenance",
        taskDescription: "Perform routine maintenance on servers.",
        taskDate: "2025-04-03",
        category: "Maintenance"
      }
    ]
  },
  {
    Id: 5,
    firstName: "Karan",
    email: "e5@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback",
        taskDescription: "Collect feedback from last week's survey.",
        taskDate: "2025-04-10",
        category: "Customer Service"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Training Session",
        taskDescription: "Conduct training on new CRM system.",
        taskDate: "2025-04-02",
        category: "Training"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve Complaint",
        taskDescription: "Handle unresolved customer complaint.",
        taskDate: "2025-03-31",
        category: "Support"
      }
    ]
  }
];

  
  const admin = [
    {
      "Id": 100,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin};
    
  }
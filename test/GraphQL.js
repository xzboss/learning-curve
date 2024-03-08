const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
	type Student {
		id: ID!
		name: String
	}

	type Course {
		id: ID!
		title: String
	}

	type StudentScore {
		student_id: String!
		course_id: String!
		score: Float!
	}

	type Query {
		student: [Student],
		course: [Course],
		studentScore: [StudentScore]
	}
`;
const StudentData = [
	{ id: '1001', name: '张三' },
	{ id: '1002', name: '李四' },
	{ id: '1003', name: '王五' },
	{ id: '1004', name: '赵六' }
]
const CourseData = [
	{ id: 'C001', title: '语文' },
	{ id: 'C002', title: '数学' },
	{ id: 'C003', title: '英语' },
	{ id: 'C004', title: '体育' },
]
const StudentScoreData = [
	{ student_id: '1001', course_id: 'C001', score: 98 },
	{ student_id: '1001', course_id: 'C002', score: 100 },
	{ student_id: '1001', course_id: 'C003', score: 100 },
	{ student_id: '1002', course_id: 'C001', score: 99 },
	{ student_id: '1002', course_id: 'C002', score: 96 },
	{ student_id: '1003', course_id: 'C003', score: 100 },
	{ student_id: '1003', course_id: 'C004', score: 70 },
	{ student_id: '1003', course_id: 'C001', score: 80 },
	{ student_id: '1004', course_id: 'C002', score: 99 }
]


const resolvers = {
	Query: {
		student: () => StudentData,
		course: () => CourseData,
		studentScore: () => StudentScoreData
	},
};


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

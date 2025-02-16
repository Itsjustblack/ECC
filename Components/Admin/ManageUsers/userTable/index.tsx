import { useRouter } from "next/router";
import { User } from "./../../../../types/complaintTypes.d";

import { Dispatch, SetStateAction } from "react";
interface TableProps {
	userData: User[];
	maxNumber: number;
	pageNumber: number;
	select: (id: string) => {};
	selected: Array<string>;
	setOperation: Dispatch<SetStateAction<boolean>>;
	setOperationType: Dispatch<SetStateAction<string>>;
	setUserId: Dispatch<SetStateAction<string>>;
	isOperation: boolean;
}

const UserTable: React.FC<TableProps> = ({ isOperation, userData, maxNumber, pageNumber, select, setUserId, selected, setOperation, setOperationType }) => {
	const router = useRouter();
	return (
		<>
			{userData.length > -1 && (
				<table className="w-full table-auto  ">
					<thead className="border-y border-y-[#e4e4ef]  border-solid">
						<tr>
							<th>
								<button className="w-[24px] ml-4 my-4 h-[24px] border border-solid border-[#e4e4e7]"></button>
							</th>
							<th>User</th>
							<th>Date Registered</th>
							<th>Phone Number</th>
							<th>Status</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{userData.slice(maxNumber * (pageNumber - 1), maxNumber * pageNumber).map((user) => (
							<tr
								key={user.userId}
								className="  border-y border-y-[#e4e4ef] bg-white"
							>
								<td>
									<button
										onClick={() => {
											select(user.userId);
										}}
										className={`w-[24px] ml-4 h-[24px] ${selected.includes(user.userId) && "bg-eccblue"} flex justify-center items-center border border-solid border-[#e4e4e7]`}
									>
										<img
											src=".././icons/check-white.svg"
											alt=""
										/>
									</button>
								</td>
								<td
									onClick={() => {
										router.push({ pathname: "/admin/manage/details", query: { id: user.userId } });
									}}
									className="flex cursor-pointer flex-row"
								>
									<img
										className="ml-4"
										src={user.profilePic}
										alt=""
									/>
									<span className=" ml-4 flex flex-col">
										<p className="font-semibold">{user.userName}</p>
										<p>{user.userEmail}</p>
									</span>
								</td>

								<td>{user.registrationDate}</td>
								<td>{user.userPhone}</td>
								<td>
									<div className={` mr-4 w-auto p-1 flex items-center justify-center rounded-lg ${user.status == "Verified" ? " text-success bg-[#ebf6eb]" : "text-[#f93232] bg-[#fff0f0]"} `}>{user.status}</div>
								</td>

								<td>
									<button
										disabled={isOperation}
										className=""
										onClick={() => {
											setOperation(true);
											setOperationType("edit");
											setUserId(user.userId);
										}}
									>
										<img
											className="mr-4"
											src="../icons/admin-icons/highlight.svg"
											alt=""
										/>
									</button>
								</td>
								<td>
									<button
										disabled={isOperation}
										className=""
										onClick={() => {
											setOperation(true);
											setOperationType("delete");
											setUserId(user.userId);
										}}
									>
										<img
											src="../icons/admin-icons/delete.svg"
											alt=""
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default UserTable;

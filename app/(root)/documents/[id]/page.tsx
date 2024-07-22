import CollaborativeRoom from "@/components/CollaborativeRoom";
import { getDocument } from "@/lib/actions/room.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Documents =async ({params:{id}}: SearchParamProps) => {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in')

    const room  = getDocument({
      roomId:id,
      userId:clerkUser.emailAddresses[0].emailAddress
    })
  
  if(!room) redirect('/')

  // Todo : Access the permissions of the user to access the document 

  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom
        
      />
    </main>
  )
}

export default Documents
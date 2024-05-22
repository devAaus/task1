
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Blogs from "./admin/Blogs"
import Authors from "./admin/Authors"
import Comment from "./admin/Comment"


const Tab = () => {

    return (

        <Tabs defaultValue="blogs" className="w-full ">
            <TabsList className="w-full">
                <TabsTrigger value="blogs" className="w-full">
                    Blogs
                </TabsTrigger>

                <TabsTrigger value="authors" className="w-full">
                    Authors
                </TabsTrigger>

                <TabsTrigger value="comments" className="w-full">
                    Comments
                </TabsTrigger>
            </TabsList>

            <TabsContent value="blogs">
                <Blogs />
            </TabsContent>

            <TabsContent value="authors">
                <Authors />
            </TabsContent>

            <TabsContent value="comments">
                <Comment />
            </TabsContent>
        </Tabs>

    )
}

export default Tab
import {PostManagementView} from "@/app/home/PostManagementView/PostManagementView";
import {Suspense } from "react";

export default function Home() {
  return (
      <>
          <Suspense fallback={<div>Загрузка...</div>}>
            <PostManagementView />
          </Suspense>
      </>
  );
}

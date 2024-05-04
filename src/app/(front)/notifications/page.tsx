import DyanmicNavBar from "@/components/common/DyanmicNavBar";
import UserAvatar from "@/components/common/UserAvatar";
import { fetchNotifications } from "@/lib/serverMethods";
import { formateDate } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export default async function Notification() {
  const notification: Array<NotificationType> | [] = await fetchNotifications();
  return (
      <div>
          <DyanmicNavBar title={"Notifications"} />

          <div className="mt-5">
              {notification && notification.length < 1 && <h1 className='text-center font-bold'>No notification found</h1>}

              {notification && notification.length > 0 && notification.map((item) => (


                  <div className="flex items-start space-x-4 mb-5" key={item.id}>
                      <UserAvatar name={item.user.name} />
                      <div className="bg-muted w-full rounded-lg p-4">
                          <div className="flex justify-between items-start w-full">
                              <p className='font-bold'>{item.user.name}</p>
                              <div className="flex">
                                  <span>{formateDate(item.created_at)}</span>
                              </div>

                          </div>
                          <div className="">
                              {item.content}
                          </div>
                      </div>

                  </div>
              ))}
          </div>
      </div>
  )
}

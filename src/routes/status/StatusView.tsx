import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function StatusView() {
    return (
        <div className="min-w-0 w-full relative">
            <div className="absolute top-8 left-0 w-full flex items-center justify-between py-4 px-6 z-10">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="border-2 border-neutral-200 w-12 h-12 flex-shrink-0 rounded-full"
                    />
                    <div className="w-full min-w-0">
                        <p className="font-semibold text-neutral-100 mb-1">
                            Jonathan
                        </p>
                        <p className="text-sm text-white/90">14:00</p>
                    </div>
                </div>
            </div>
            <Swiper
                className="h-full swiper-status before:absolute before:top-0 before:left-0 before:w-full before:h-32 before:bg-gradient-to-b before:from-black/75 before:to-transparent before:z-10"
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="w-full h-full object-cover block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="w-full h-full object-cover block"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="w-full h-full object-cover block"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

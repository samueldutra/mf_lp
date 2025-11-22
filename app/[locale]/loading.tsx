export default function Loading() {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary-pink/30 border-t-gold rounded-full animate-spin" />
                <span className="font-serif text-gold text-sm tracking-widest animate-pulse">LOADING</span>
            </div>
        </div>
    );
}

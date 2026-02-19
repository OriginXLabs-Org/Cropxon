import { Link } from "react-router-dom";
import { Home, type LucideIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = {
  label: string;
  href?: string;
  icon?: LucideIcon;
};

type AppBreadcrumbProps = {
  items: Crumb[];
};

const AppBreadcrumb = ({ items }: AppBreadcrumbProps) => (
  <div className="mb-8 rounded-lg border border-border/70 bg-card/40 px-4 py-3">
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const Icon = item.icon ?? (index === 0 ? Home : undefined);
          const isLast = index === items.length - 1;

          return (
            <div key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage className="inline-flex items-center gap-1.5 text-xs sm:text-sm">
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="inline-flex items-center gap-1.5 text-xs sm:text-sm">
                      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast ? <BreadcrumbSeparator /> : null}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  </div>
);

export default AppBreadcrumb;

"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "../ui/morphing-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

function DataSubject() {
  const { t } = useTranslation("roles");

  return (
    <MorphingDialog transition={{ type: "spring", stiffness: 200, damping: 24 }}>
      <MorphingDialogTrigger className="border border-gray-200/60 bg-white rounded">
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt={t("dataSubject.triggerTitle")}
            className="h-8 w-8 object-cover object-top rounded"
          />
          <div className="flex flex-col items-start">
            <MorphingDialogTitle className="text-base font-bold capitalize">
              {t("dataSubject.triggerTitle")}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-xs text-gray-600">
              {t("dataSubject.triggerSubtitle")}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[500px] border border-gray-100 bg-white rounded-lg">
          <ScrollArea className="h-[90vh]">
            <div className="p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt={t("dataSubject.modalTitle")}
                  className="w-[200px]"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <MorphingDialogTitle className="text-lg text-neutral-900">
                    {t("dataSubject.modalTitle")}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-sm text-gray-600">
                    {t("dataSubject.modalSubtitle")}
                  </MorphingDialogSubtitle>
                </div>
                <h1 className="text-base font-medium text-neutral-500">
                  {t("dataSubject.modalContent")}
                </h1>
                <div className="mt-4">
                  <a href="/ftp">
                    <Button size="lg" className="group w-full">
                      <span>{t("dataSubject.buttonText")}</span>
                      <ArrowRight
                        className="ms-2 -me-1 opacity-60 group-hover:translate-x-0.5 transition-transform"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

function DataController() {
  const { t } = useTranslation("roles");

  return (
    <MorphingDialog transition={{ type: "spring", stiffness: 200, damping: 24 }}>
      <MorphingDialogTrigger className="border border-gray-200/60 bg-white rounded">
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt={t("dataController.triggerTitle")}
            className="h-8 w-8 object-cover object-top rounded"
          />
          <div className="flex flex-col items-start">
            <MorphingDialogTitle className="text-base font-semibold capitalize">
              {t("dataController.triggerTitle")}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-xs text-gray-600">
              {t("dataController.triggerSubtitle")}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[500px] border border-gray-100 bg-white rounded-lg">
          <ScrollArea className="h-[90vh]">
            <div className="p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt={t("dataController.modalTitle")}
                  className="w-[200px]"
                />
              </div>
              <div className="space-y-6">
                <MorphingDialogTitle className="text-lg text-neutral-900">
                  {t("dataController.modalTitle")}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-sm text-gray-600">
                  {t("dataController.modalSubtitle")}
                </MorphingDialogSubtitle>
                <h1 className="text-base font-medium text-neutral-500">
                  {t("dataController.modalContent")}
                </h1>
                <div className="mt-4">
                  <a href="/fto/Data-Controller">
                    <Button size="lg" className="group w-full">
                      <span>{t("dataController.buttonText")}</span>
                      <ArrowRight
                        className="ms-2 -me-1 opacity-60 group-hover:translate-x-0.5 transition-transform"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

function DataProcessor() {
  const { t } = useTranslation("roles");

  return (
    <MorphingDialog transition={{ type: "spring", stiffness: 200, damping: 24 }}>
      <MorphingDialogTrigger className="border border-gray-200/60 bg-white rounded">
        <div className="flex items-center space-x-2 p-4">
          <MorphingDialogImage
            src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
            alt={t("dataProcessor.triggerTitle")}
            className="h-8 w-8 object-cover object-top rounded"
          />
          <div className="flex flex-col items-start">
            <MorphingDialogTitle className="text-base font-semibold capitalize">
              {t("dataProcessor.triggerTitle")}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-xs text-gray-600">
              {t("dataProcessor.triggerSubtitle")}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[500px] border border-gray-100 bg-white rounded-lg">
          <ScrollArea className="h-[90vh]">
            <div className="p-6">
              <div className="flex justify-center py-10">
                <MorphingDialogImage
                  src="https://m.media-amazon.com/images/I/71skAxiMC2L._AC_UF1000,1000_QL80_.jpg"
                  alt={t("dataProcessor.modalTitle")}
                  className="w-[200px]"
                />
              </div>
              <div className="space-y-6">
                <MorphingDialogTitle className="text-lg text-neutral-900">
                  {t("dataProcessor.modalTitle")}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-sm text-gray-600">
                  {t("dataProcessor.modalSubtitle")}
                </MorphingDialogSubtitle>
                <h1 className="text-base font-medium text-neutral-500">
                  {t("dataProcessor.modalContent")}
                </h1>
                <div className="mt-4">
                  <a href="/fto/Data-Processor">
                    <Button size="lg" className="group w-full">
                      <span>{t("dataProcessor.buttonText")}</span>
                      <ArrowRight
                        className="ms-2 -me-1 opacity-60 group-hover:translate-x-0.5 transition-transform"
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-zinc-500" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export { DataSubject, DataController, DataProcessor };
